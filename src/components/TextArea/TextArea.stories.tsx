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

export const Hover: Story = {
    render: (args) => {
        const [value, setValue] = useState("");
        return (
            <div className="space-y-4">
                <p className="text-sm text-gray-600">
                    マウスオーバーすると下部のバーがピンク色にハイライトされます
                </p>
                <TextArea {...args} value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
        );
    },
    args: {
        placeholder: "ホバーしてみてください",
    },
};

export const Disabled: Story = {
    render: (args) => {
        const [value, setValue] = useState("編集できません");
        return <TextArea {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
    args: {
        disabled: true,
        placeholder: "この入力フィールドは無効です",
        className: "opacity-50 cursor-not-allowed",
    },
};
