import { BlockFieldTypeSettings, BlocksFieldTypeSettings, ContentTypeField, ContentTypeInput } from "./content-type.model";
import contentTypeService from "./content-type.service";

const resolvers = {
    Query: {
        contentTypes() {
            return contentTypeService.find({});
        }
    },

    Mutation: {
        createContentType(_: unknown, args: { contentType: ContentTypeInput }) {
            return contentTypeService.create(args.contentType);
        },

        updateContentType(_: unknown, args: { contentTypeId: string, contentType: ContentTypeInput }) {
            return contentTypeService.update(args.contentTypeId, args.contentType);
        },

        deleteContentType(_: unknown, args: { contentTypeId: string }) {
            return contentTypeService.delete(args.contentTypeId);
        }
    },

    ContentTypeField: {
        __resolveType(contentTypeField: ContentTypeField) {
            return contentTypeField.type
        }
    },

    BlockFieldTypeSettings: {
        blockType(blockFieldTypeSettings: BlockFieldTypeSettings) {
            return contentTypeService.findOne({ contentTypeId: blockFieldTypeSettings.blockType });
        }
    },

    BlocksFieldTypeSettings: {
        possibleBlockTypes(blocksFieldTypeSettings: BlocksFieldTypeSettings) {
            if(!blocksFieldTypeSettings.possibleBlockTypes || blocksFieldTypeSettings.possibleBlockTypes.length === 0) {
                return contentTypeService.find({});
            }
            return contentTypeService.find({ contentTypeId: { $in: blocksFieldTypeSettings.possibleBlockTypes } });
        }
    }
}

export const contentTypeResolvers = resolvers;