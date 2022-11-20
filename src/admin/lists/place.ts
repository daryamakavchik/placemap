import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { float, relationship, text } from "@keystone-6/core/fields";

export const Place = list({
    fields: {
        name: text({
            validation: { isRequired: true }
        }),
        latitude: float({
            validation: { isRequired: true }
        }),
        longitude: float({
            validation: { isRequired: true }
        }),
        images: relationship({ ref: 'Photo', many: true })
    },
    access: allowAll
});
