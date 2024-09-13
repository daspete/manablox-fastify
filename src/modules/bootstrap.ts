import { createApplication } from "graphql-modules";
import { userModule } from "./user";
import { contentTypeModule } from "./content-type";

export const graphqlApplicaton = createApplication({
    modules: [
        userModule,
        contentTypeModule
    ]
});

