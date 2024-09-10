import { createApplication } from "graphql-modules";
import { userModule } from "./user";

export const graphqlApplicaton = createApplication({
    modules: [
        userModule
    ]
});

