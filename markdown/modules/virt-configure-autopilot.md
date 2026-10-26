{%- set _mod_docs_content_type = "CONCEPT" %}
# Automated postinstallation configuration {id="virt-configure-virt-platform-autopilot_{{ context }}"}

The `virt-platform-autopilot` controller automatically applies defaults to the virtualization platform and components that are already installed on the cluster. You can customize or opt out of any managed configuration. {._abstract}

The `virt-platform-autopilot` controller configures optional components such as the {{ descheduler_operator }} and the {{ coo_full }} if they are installed. If an optional component is not installed, the `virt-platform-autopilot` controller skips that configuration and continues without error. When you install an optional component later, the `virt-platform-autopilot` controller detects it on the next reconciliation cycle and applies the relevant configuration automatically.

The `virt-platform-autopilot` controller manages the following configurations:


Load-aware descheduler
:   Configures the {{ descheduler_operator }} to balance virtual machine (VM) workloads across nodes based on CPU and memory use.
    Requires the {{ descheduler_operator }} to be installed.


Observability enhancements
:   Enhances observability with additional Prometheus alerting rules and advanced Perses dashboards in the {{ product_title }} web console.


Swap enablement
:   Enables {{ product_title }} worker nodes to safely use swap for virtualization workloads. Swap requires pre-provisioned, dedicated storage to be available.


Reconciliation and anti-thrashing behavior
:   The `virt-platform-autopilot` controller continuously reconciles managed resources to keep the expected state. If an external process changes a managed resource, the `virt-platform-autopilot` controller detects the drift and restores the expected state.

    To prevent thrashing, the `virt-platform-autopilot` controller monitors the rate of changes to managed resources. If the `virt-platform-autopilot` controller detects rapid or repeated changes, it pauses reconciliation for the affected resources. You can monitor paused resources by using the `kubevirt_autopilot_paused_resources` metric.

{% leveloffset +1 %}{% include "./virt-resource-level-exclusions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./virt-json-patch-resources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./virt-field-masking-resource.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./virt-unmanaged-autopilot-resources.md" %}{% endleveloffset %}