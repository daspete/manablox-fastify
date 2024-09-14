export type ContentType = {
    contentTypeId: string;
    name: string;
    description?: string;
    hasSlug?: boolean;
    isBlockType: boolean;
    isPublishable?: boolean;
    isVisibleInTree?: boolean;
    canBeVisibleInMenu?: boolean;
    icon?: string;
    fields: ContentTypeField[];
}

export type ContentTypeInput = Partial<ContentType>

export type ContentTypeFieldSettings = {
    isRequired: boolean
}

export type ContentTypeFieldAdminSettings = {
    zone?: string
    width?: number
}

export type ContentTypeField = StringFieldType | NumberFieldType | BooleanFieldType | DateFieldType

export type ContentTypeFieldInput = {
    contentTypeFieldId?: string;
    type?: string;
    name?: string;
    fieldSettings?: ContentTypeFieldSettings;
    adminSettings?: ContentTypeFieldAdminSettings;
    stringSettings?: StringFieldTypeSettings;
    numberSettings?: NumberFieldTypeSettings;
    booleanSettings?: BooleanFieldTypeSettings;
    dateSettings?: DateFieldTypeSettings;
    blockSettings?: BlockFieldTypeSettings;
    blocksSettings?: BlocksFieldTypeSettings;
}

export type StringFieldType = {
    contentTypeFieldId: string;
    type: string;
    name: string;
    fieldSettings: ContentTypeFieldSettings;
    adminSettings: ContentTypeFieldAdminSettings;
    stringSettings: StringFieldTypeSettings;
}

export type StringFieldTypeSettings = {
    minCharacters?: number
    maxCharacters?: number
    defaultValue?: string
    regex?: string
    isRichText?: boolean
    isCodeBlock?: boolean
    isTextArea?: boolean
}


export type NumberFieldType = {
    contentTypeFieldId: string;
    type: string;
    name: string;
    fieldSettings: ContentTypeFieldSettings;
    adminSettings: ContentTypeFieldAdminSettings;
    numberSettings: NumberFieldTypeSettings;
}

export type NumberFieldTypeSettings = {
    minValue?: number
    maxValue?: number
    defaultValue?: number
}


export type BooleanFieldType = {
    contentTypeFieldId: string;
    type: string;
    name: string;
    fieldSettings: ContentTypeFieldSettings;
    adminSettings: ContentTypeFieldAdminSettings;
    booleanSettings: BooleanFieldTypeSettings;
}

export type BooleanFieldTypeSettings = {
    defaultValue?: boolean
}


export type DateFieldType = {
    contentTypeFieldId: string;
    type: string;
    name: string;
    fieldSettings: ContentTypeFieldSettings;
    adminSettings: ContentTypeFieldAdminSettings;
    dateSettings: DateFieldTypeSettings;
}

export type DateFieldTypeSettings = {
    defaultValue?: string
    minDate?: string
    maxDate?: string
}


export type BlockFieldType = {
    contentTypeFieldId: string;
    type: string;
    name: string;
    fieldSettings: ContentTypeFieldSettings;
    adminSettings: ContentTypeFieldAdminSettings;
    blockSettings: BlockFieldTypeSettings;
}

export type BlockFieldTypeSettings = {
    blockType: string
}


export type BlocksFieldType = {
    contentTypeFieldId: string;
    type: string;
    name: string;
    fieldSettings: ContentTypeFieldSettings;
    adminSettings: ContentTypeFieldAdminSettings;
    blocksSettings: BlocksFieldTypeSettings;
}

export type BlocksFieldTypeSettings = {
    possibleBlockTypes?: string[]
}