import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { image } from "@keystone-6/core/fields";

export const Photo = list({
    fields: {
        image: image({ storage: 's3' })
    },
    access: allowAll
});
