import { render } from "@testing-library/react";
import { FileExplorer, Node } from "./FileExplorer";

const NODES: Node[] = [
  {
    id: "1",
    name: "Home",
    nodes: [
      {
        id: "11",
        name: "Movies",
        nodes: [
          {
            id: "12",
            name: "2000s",
            nodes: [
              {
                id: "23",
                name: "Shawshank Redemption",
              },
              {
                id: "44",
                name: "Dark Knight",
              },
            ],
          },
        ],
      },
      {
        id: "33",
        name: "TV Shows",
        nodes: [],
      },
    ],
  },
  {
    id: "211",
    name: "Local",
    nodes: [
      {
        id: "222",
        name: "config.txt",
      },
    ],
  },
];

describe(`Component: ${FileExplorer.name}`, () => {
  it("should render", () => {
    const { container } = render(<FileExplorer nodes={NODES} />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="undefined"
        >
          <ul>
            <li
              class="my-1"
            >
              <span
                class="flex gap-2"
              >
                <span
                  class="flex gap-0.5 items-center"
                >
                  <button>
                    <svg
                      class="size-4 false size-6"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <svg
                    class="fill-sky-400 size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z"
                    />
                  </svg>
                </span>
                 
                Home
              </span>
            </li>
            <li
              class="my-1"
            >
              <span
                class="flex gap-2"
              >
                <span
                  class="flex gap-0.5 items-center"
                >
                  <button>
                    <svg
                      class="size-4 false size-6"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <svg
                    class="fill-sky-400 size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z"
                    />
                  </svg>
                </span>
                 
                Local
              </span>
            </li>
          </ul>
        </div>
      </div>
    `);
  });
});
