import { createApplication } from "graphql-modules";
import { userModule } from "./user";
import { contentTypeModule } from "./content-type";
import { contentModule } from "./content";

export const graphqlApplicaton = createApplication({
    modules: [
        userModule,
        contentTypeModule,
        contentModule
    ]
});

