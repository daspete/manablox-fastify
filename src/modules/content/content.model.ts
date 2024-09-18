export type Content = {
    contentId: string;
    contentType: string;
    title: string;
    slug: string;
    parent: string;
    locale: string;
    localizationId: string;
    permalink: string;
    fields: Array<ContentField>;
}
export type ContentInput = Partial<Content>

export type Block = {
    blockId: string;
    blockType: string;
    fields: Array<ContentField>;
}
export type BlockInput = {
    blockId?: string;
    blockType?: string;
    fields?: Array<ContentFieldInput>;
}

export type ContentField = StringContentField | NumberContentField | BooleanContentField | DateContentField | BlockContentField | BlocksContentField;
export type ContentFieldInput = {
    contentFieldId?: string;
    type?: string;
    name?: string;
    string?: string;
    number?: number;
    boolean?: boolean;
    date?: string;
    block?: BlockInput;
    blocks?: Array<BlockInput>;
}

export type StringContentField = {
    contentFieldId: string;
    type: string;
    name: string;
    string: string;
}

export type NumberContentField = {
    contentFieldId: string;
    type: string;
    name: string;
    number: number;
}

export type BooleanContentField = {
    contentFieldId: string;
    type: string;
    name: string;
    boolean: boolean;
}

export type DateContentField = {
    contentFieldId: string;
    type: string;
    name: string;
    date: string;
}

export type BlockContentField = {
    contentFieldId: string;
    type: string;
    name: string;
    block: Block;
}

export type BlocksContentField = {
    contentFieldId: string;
    type: string;
    name: string;
    blocks: Array<Block>;
}
