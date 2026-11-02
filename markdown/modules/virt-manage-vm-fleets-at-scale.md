{%- set _mod_docs_content_type = "CONCEPT" %}
# Manage VM fleets at scale {id="virt-manage-vm-fleets-at-scale_{{ context }}"}

Operate large numbers of virtual machines (VMs) as a group by running bulk actions from the web console, automating VM lifecycle tasks in CI/CD pipelines, and driving VM power and inventory through a Redfish-compatible API. {._abstract}

Managing a few VMs by hand does not scale. At fleet size, the same change must reach many VMs at once, repeat reliably, and run without a person in the web console.

{{ VirtProductName }} supports several approaches, which you can combine:


Web console bulk actions
:   Select several VMs in the **VirtualMachines** list and act on them together, for example to apply labels, take snapshots, or live migrate. To add further bulk actions, or custom tabs on the **Virtualization** page, you integrate a dynamic plugin.


CI/CD pipelines
:   Red&#160;Hat OpenShift Pipelines runs each step of a pipeline in its own container, so that you can create and manage VMs and their disks as part of an automated deployment workflow.


Redfish API
:   KubeVirt Redfish exposes VMs through a Redfish-compatible API, so that external tools and orchestration systems can manage power states, query inventory, and attach virtual media by using the same automation patterns that they use for physical baseboard management controllers (BMCs).

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Dynamic plugins overview](/web_console/dynamic-plugin/overview-dynamic-plugin#overview-dynamic-plugin)
*   [Getting started with dynamic plugins](/web_console/dynamic-plugin/dynamic-plugins-get-started#dynamic-plugins-get-started)
*   [Redfish standard (DMTF)](https://www.dmtf.org/standards/redfish)
*   [Manage OpenShift virtual machines with GitOps learning path](https://developers.redhat.com/learning/learn:manage-openshift-virtual-machines-gitops/resource/resources:connect-and-configure-external-repository-argo-cd-virtual-machines)
*   [Red Hat OpenShift GitOps documentation](https://docs.openshift.com/gitops/)