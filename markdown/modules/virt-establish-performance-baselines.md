{%- set _mod_docs_content_type = "CONCEPT" %}
# Establish performance baselines {id="virt-establish-performance-baselines_{{ context }}"}

Run a storage checkup to see whether your cluster storage suits {{ VirtProductName }} workloads. Keep the result so you can compare against it later. {._abstract}

{%- set FeatureName = "The {{ VirtProductName }} cluster checkup framework" %}
{% include "./snippets/technology-preview.md" %}

{%- set FeatureName = "" %}

A _checkup_ is an automated test that tells you whether part of your cluster works as expected. Checkups run on the cluster checkup framework, which uses standard Kubernetes resources. Each checkup leaves results that you can read or share with support.

The storage checkup tests your cluster storage against what {{ VirtProductName }} needs. You can run it from the web console or the CLI.

Run a checkup while the cluster is working normally and keep the result. You can compare later results against it.

{% include "./snippets/virt-about-running-checkups.md" %}

**Additional resources**
{._additional-resources}

*   [Use the `must-gather` tool for {{ VirtProductName }}](/virt/support/virt-collecting-virt-data#virt-using-virt-must-gather_virt-collecting-virt-data)