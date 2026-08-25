{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create custom tabs in the web console {id="virt-create-custom-console-tabs_{{ context }}"}

As a cluster administrator, you can customize the {{ product_title }} web console by adding customized tabs to the **Virtualization** page. {._abstract}

**Prerequisites**

*   You have created a dynamic plugin.
*   You have cluster administrator permissions.
*   You have access to an {{ product_title }} cluster where {{ VirtProductName }} is installed.

**Procedure**

*   Add the `kubevirt.tab/horizontalNav` extension to the `plugin-extensions.ts` file of the `KubeVirt` plugin:
    ```typescript
    {
        type: 'kubevirt.tab/horizontalNav',
        properties: {
          model: {
            version: 'v1',
            group: 'kubevirt.io',
            kind: 'VirtualMachine',
          },
          page: {
            name: 'Kubevirt Test',
            href: 'kubevirt-test',
          },
          isVisible: { $codeRef: 'isKubevirtTabVisible' },
          component: { $codeRef: 'KubevirtTestTab' },
        },
      }
    ```
    *   The `component` flag that references `KubevirtTestTab` refers to the actual tab content that you want to include.
    *   The `isVisible` flag refers to the following example code reference:
        ```typescript
        import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';

        const isKubevirtTabVisible = ({
          created,
        }: {
          created: boolean;
          obj: K8sResourceCommon & { cluster?: string };
        }) => created;
        export default isKubevirtTabVisible;
        ```

        The `KubeVirt` plugin provides this parameter, and it is `true` if the referenced object has been already created. This flag ensures that the plugin author can prevent the custom tab from being displayed on certain pages, such as the **Create Virtual Machine** page.

**Verification**

1.  Log in to the {{ product_title }} web console.
1.  Go to the **Virtualization** page and verify that the custom tab you have created is visible.
1.  Go to the **Create Virtual Machine** page and verify that your custom backup actions or tabs do not appear.