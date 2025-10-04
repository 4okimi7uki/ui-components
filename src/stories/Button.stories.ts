import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fn } from "storybook/test";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Example/Button",
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
        design: {
            type: "figma",
            url: "https://www.figma.com/design/4VfHKQF3qh3IkXMf08vJ67/Storybook-Connect--%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3-?node-id=2-11&t=2wqUIFybMtH0xuEJ-1",
        },
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        backgroundColor: { control: "color" },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        primary: true,
        label: "Button",
    },
};

export const Secondary: Story = {
    args: {
        label: "Button",
    },
};

export const Large: Story = {
    args: {
        size: "large",
        label: "Button",
    },
};

export const Small: Story = {
    args: {
        size: "small",
        label: "Button",
    },
};
