export const extract = (manifest) => {
  const elements = manifest.modules.reduce(
    (els, module) =>
      els.concat(
        module.declarations?.filter((dec) => dec.customElement) ?? []
      ),
    []
  );
  return elements;
}

export const code = (manifest) => {
  const elements = extract(manifest);
  return `
   ${elements
     .map(
       (element) => `
          <${element.tagName} ${element.attributes
            .map((attribute) =>
              `${attribute.name}="${attribute.type.text}"`)}></${element.tagName}>
 `)}`;
     };

export const table = (manifest) => {
  const elements = extract(manifest);
  return `
   ${elements
     .map(
       (element) => `
     <h3 id="tag-name">&lt;${element.tagName}></h3>
     <div>
       ${element.description}
     </div>
     ${renderTable(
       'Attributes',
       ['name', 'description', 'type.text', 'default'],
       element.attributes
     )}
     ${renderTable(
       'Properties',
       ['name', 'attribute', 'description', 'type.text', 'default'],
       element.members.filter((m) => m.kind === 'field')
     )}  
     ${renderTable(
       'Methods',
       ['name', 'parameters', 'description', 'return.type.text'],
       element.members
         .filter((m) => m.kind === 'method' && m.privacy !== 'private')
         .map((m) => ({
           ...m,
           parameters: renderTable(
             '',
             ['name', 'description', 'type.text'],
             m.parameters
           ),
         }))
     )}
     ${renderTable('Events', ['name', 'description'], element.events)}    
     ${renderTable(
       'Slots',
       [['name', '(default)'], 'description'],
       element.slots
     )}  
     ${renderTable(
       'CSS Shadow Parts',
       ['name', 'description'],
       element.cssParts
     )}
     ${renderTable(
       'CSS Custom Properties',
       ['name', 'description'],
       element.cssProperties
     )}
     `
     )
     .join('')}
 `;
};

/**
 * Reads a (possibly deep) path off of an object.
 */
const get = (obj, path) => {
  let fallback = '';
  if (Array.isArray(path)) {
    [path, fallback] = path;
  }
  const parts = path.split('.');
  while (obj && parts.length) {
    obj = obj[parts.shift()];
  }
  return obj == null || obj === '' ? fallback : obj;
};

/**
 * Renders a table of data, plucking the given properties from each item in
 * `data`.
 */
export const renderTable = (name, properties, data) => {
  if (data === undefined || data.length === 0) {
    return '';
  }
  return `
   ${name ? `<h3 id=${name.toLowerCase()}>${name}</h3>` : ''}
   <table>
     <tr>
       ${properties
         .map(
           (p) =>
             `<th>${capitalize(
               (Array.isArray(p) ? p[0] : p).split('.')[0]
             )}</th>`
         )
         .join('')}
     </tr>
     ${data
       .map(
         (i) => `
       <tr>
         ${properties.map((p) => `<td>${get(i, p)}</td>`).join('')}
       </tr>
     `
       )
       .join('')}
   </table>
 `;
};

const capitalize = (s) => s[0].toUpperCase() + s.substring(1);