import React from "react";
import {
  Accordion,
  AccordionProps,
  CheckBoxGroup,
  CheckBoxOption,
  SearchInput,
} from "@/ui";

interface TraitsProps {}
interface TraitProps extends AccordionProps {
  className?: string;
  options: CheckBoxOption[];
}

const Trait: React.FC<TraitProps> = ({ ...props }) => {
  const { title, after, className, options } = props;
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);
  const handleCheckBoxChange = (values: string[]) => {
    setSelectedValues(values);
  };
  return (
    <div className={className}>
      <Accordion title={title} after={after}>
        <div className="m-2">
          <SearchInput placeholder="Search" px={3} py={2} />
          <CheckBoxGroup
            options={options}
            selectedValues={selectedValues}
            onChange={handleCheckBoxChange}
            multiple
            className="my-2"
          />
        </div>
      </Accordion>
    </div>
  );
};

const CheckBoxAfter: React.FC<{ content: string }> = ({ ...props }) => {
  const { content } = props;
  return (
    <div>
      <span className="text-neutral-600 text-sm font-bold">{content}</span>
    </div>
  );
};

const Traits: React.FC<TraitsProps> = ({ ...props }) => {
  const items = [
    {
      title: "Background",
      after: "12",
      options: [
        {
          label: "Orange",
          value: "Orange",
          after: <CheckBoxAfter content="283" />,
        },
        {
          label: "Blue",
          value: "Blue",
          after: <CheckBoxAfter content="283" />,
        },
        {
          label: "Purple",
          value: "Purple",
          after: <CheckBoxAfter content="283" />,
        },
      ],
    },
    {
      title: "Body",
      after: "12",
      options: [
        {
          label: "Orange",
          value: "Orange",
          after: <CheckBoxAfter content="283" />,
        },
        {
          label: "Blue",
          value: "Blue",
          after: <CheckBoxAfter content="283" />,
        },
        {
          label: "Purple",
          value: "Purple",
          after: <CheckBoxAfter content="283" />,
        },
      ],
    },
  ];

  return (
    <div>
      <Accordion title="Traits"></Accordion>
      <ul>
        <li>
          {items.map((el, index) => {
            return <Trait key={index} {...el} />;
          })}
        </li>
      </ul>
    </div>
  );
};

export default Traits;
