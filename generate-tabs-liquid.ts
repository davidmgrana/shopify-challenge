import { readFileSync, writeFileSync } from 'fs';
import { SectionSchema } from './tabs/schema';

function generateLiquid(schema: SectionSchema, content: string, jsFile: string) {
    const jsContent = readFileSync(jsFile, 'utf-8');
    const liquid = `
    {% schema %}
    {
      "name": "Tabs",
      "settings": [],
      "blocks": [
        {
          "type": "tab",
          "name": "Tab",
          "settings": [
            {
              "id": "tab_title",
              "type": "text",
              "label": "${schema.settings.text.label}",
              "default": "${schema.settings.text.default || 'Default tab text'}"
            },
            {
              "id": "tab_content",
              "type": "textarea",
              "label": "${schema.settings.content.label}"
            },
            {
              "id": "tab_color",
              "type": "color",
              "label": "${schema.settings.color.label}",
              "default": "${schema.settings.color.default || '#000000'}"
            }
          ]
        }
      ],
      "presets": []
    }
    {% endschema %}
    ${content}
    <script>${jsContent}</script>
  `;

    const outputPath = './theme/sections/tabs.liquid';
    writeFileSync(outputPath, liquid);
    console.log(`Generated ${outputPath}`);
}

const schema: SectionSchema = {
  settings: {
    text: { type: 'text', label: 'Tab Title' },
    content: { type: 'textarea', label: 'Tab Content' },
    color: { type: 'color', label: 'Tab Color' }
  },
  blocks: [
    
  ]
};

const content = readFileSync('./tabs/content.liquid', 'utf-8');
const jsFile = './tabs/tabs.vanilla.js';

generateLiquid(schema, content, jsFile);