import { InputField } from "@/components/InputField/InputField";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof InputField> = {
    title: "Form/InputField",
    component: InputField,
    args: {
        placeholder: "Type something...",
        type: "text",
        required: false,
    },
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "focus時のアニメーションを持っています",
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
    render: (args) => {
        const [value, setValue] = useState("");
        return <InputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const Password: Story = {
    args: { type: "password", placeholder: "Enter password", required: true },
    render: Default.render,
};
