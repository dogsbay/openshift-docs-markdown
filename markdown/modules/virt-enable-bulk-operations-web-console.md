{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable bulk operations for virtual machines {id="virt-enable-bulk-operations-web-console_{{ context }}"}

You can enable virtual machine (VM) owners to perform large-scale management tasks, such as backups and storage migrations, across many virtual machines simultaneously, by creating a dynamic plugin that enables bulk actions in the web console. {._abstract}

This integration reduces manual tasks for multi-VM environments and ensures that custom actions are available as native, selectable bulk actions from within the **Virtualization** page.

**Prerequisites**

*   You have created a dynamic plugin.
*   You have cluster administrator permissions.
*   You have access to an {{ product_title }} cluster where {{ VirtProductName }} is installed.

**Procedure**

1.  In the configuration file of your plugin, add a `console.action/provider` extension.

    To enable bulk actions, you must use a `contextId` field that targets an array of `VirtualMachine` resources.

    Example `console-extensions.json` file excerpt:
    ```json
    {
       type: 'console.action/provider',
       properties: {
         contextId: 'kubevirt.io~v1~VirtualMachine[]',
         provider: {
           $codeRef: 'useSimpleBulkActions',
         },
       },
     }
    ```
    *   `properties.contextId` specifies a string for which the `KubeVirt` plugin declares support.
    *   `properties.provider` specifies the React hook or function in your source code that generates the action items.
1.  In the source file referenced by the extension, implement a hook that handles the array of selected resources.

    Example plugin:
    ```ts
    import {
      type ExtensionHook,
      AccessReviewResourceAttributes,
      Action,
    } from '@openshift-console/dynamic-plugin-sdk';
    import { V1VirtualMachine } from '@kubevirt-ui-ext/kubevirt-api/kubevirt';
    import { VirtualMachineModel } from '@kubevirt-ui-ext/kubevirt-api/console';
    import { useMemo } from 'react';

    const useSimpleBulkActions: ExtensionHook<Action[], (V1VirtualMachine & { cluster?: string })[]> = (
      vms,
    ) => {
      const areAllRunning = vms.every((vm) => vm.status?.printableStatus === 'Running');
      const isCrossCluster = new Set(vms.map((vm) => vm.cluster)).size > 1;
      const firstVm = vms[0];

      const accessReview: AccessReviewResourceAttributes = useMemo(
        () => ({
          cluster: firstVm?.cluster,
          group: VirtualMachineModel.apiGroup,
          name: firstVm?.metadata?.name,
          namespace: firstVm?.metadata?.namespace,
          resource: VirtualMachineModel.plural,
          verb: 'delete',
        }),
        [firstVm?.cluster, firstVm?.metadata?.name, firstVm?.metadata?.namespace],
      );

      const checkAllRunningAction: Action = useMemo(
        () => ({
          id: 'check-all-running',
          cta: () => console.log('All selected VMs are running?', areAllRunning),
          label: 'Check VMs are running',
          disabled: isCrossCluster,
          disabledTooltip: isCrossCluster ? 'VMs from different clusters detected' : '',
          accessReview,
        }),
        [areAllRunning, isCrossCluster, accessReview],
      );

      const actions = useMemo(() => [checkAllRunningAction], [checkAllRunningAction]);
      return [actions, true, null];
    };

    export default useSimpleBulkActions;
    ```

    The plugin shown in the previous example checks if all selected VMs are running and prints a log message to the console.
1.  Deploy the plugin to the cluster.

**Verification**

1.  Log in to the {{ product_title }} web console.
1.  Verify that you can apply bulk actions to VMs.
    1.  Go to **Virtualization** → **VirtualMachines**.
    1.  Select the checkboxes for two or more existing VMs.
    1.  Click the **Actions** drop-down menu. Confirm that you can run the custom action you created.