import { TextArea } from "@/components/TextArea/TextArea";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof TextArea> = {
    title: "Form/TextArea",
    component: TextArea,
    args: {
        placeholder: "Type something...",
        required: false,
    },
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
    render: (args) => {
        const [value, setValue] = useState("");
        return <TextArea {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};
