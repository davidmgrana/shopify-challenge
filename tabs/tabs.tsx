import { h, render } from 'preact';
import { SectionSchema } from './schema';

interface TabsProps {
    section: {
        settings: SectionSchema['settings'];
        blocks: SectionSchema['blocks'];
    };
}

function showTabText( tabName: string) {
document.querySelectorAll('.tab2').forEach(tab => {
    tab.style.display = "none";
  })
  document.getElementById(tabName).style.display = "block";
}

function Tabs({ section }: TabsProps) {
    return (
      <div className="tabs" data-section-settings={JSON.stringify(section.settings)} data-section-blocks={JSON.stringify(section.blocks)}>
        <h1 class="text-2xl underline underline-offset-2 ml-4 p-2">Tabs Preact</h1>
        <div class="tabs__container flex px-8 py-6 border border-solid border-[#e5e7eb] m-4 rounded-xl shadow">
          <div class="max-w-7xl mr-auto">
            {section.blocks.map((block, index) => (
                <button
                  class="group font-medium text-base px-3 rounded-md p-2 h-[50px]"
                  onClick={() => showTabText( `tabs${index + 1}`)}
                  style={`color:${ block.settings.tab_color };`}
                  key={index + 1}>
                  { block.settings.tab_title }
                  <div class="block col-span-9 max-w-0 h-0.5 bg-gray-300 group-hover:max-w-[100%] transition-[max-width] duration-500"></div>
                </button>
              ))}
            {section.blocks.map((block, index) => (
              <div id={`tabs${index + 1}`} class="tab2 hidden px-3 text-xl italic" key={index + 1}>
                { block.settings.tab_content }
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

const sectionData = document.querySelector('.tabs-section') as HTMLElement;
const container = document.querySelector('#container-app') as HTMLElement;

if (sectionData?.dataset) {
    const settings = JSON.parse(sectionData.dataset.sectionSettings || '{}');
    const blocks = JSON.parse(sectionData.dataset.sectionBlocks || '[]');

    render(<Tabs section={{ settings, blocks }} />, container);
}
