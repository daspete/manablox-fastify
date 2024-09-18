import contentTypeService from "../content-type/content-type.service";
import { Content, ContentField, ContentInput } from "./content.model";
import contentService from "./content.service";

const resolvers = {
    Query: {
        async contents() {
            return contentService.find({});
        },

        async contentByPermalink(_:unknown, args: { permalink: string }) {
            return contentService.findOne({ permalink: args.permalink });
        }
    },

    Mutation: {
        async createContent(_: unknown, args: { content: ContentInput }) {
            return contentService.create(args.content);
        },

        async updateContent(_: unknown, args: { contentId: string, content: ContentInput }) {
            return contentService.update(args.contentId, args.content);
        },

        async deleteContent(_: unknown, args: { contentId: string }) {
            return contentService.delete(args.contentId);
        }
    },

    ContentField: {
        __resolveType(contentField: ContentField) {
            return contentField.type
        }
    },

    Content: {
        async contentType(content: Content) {
            return contentTypeService.findOne({ contentTypeId: content.contentType });
        }
    }
    
}

export const contentResolvers = resolvers;