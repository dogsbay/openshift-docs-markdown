{%- set _mod_docs_content_type = "CONCEPT" %}
# Run automated health assessments {id="virt-run-automated-health-assessments_{{ context }}"}

Run a self validation checkup to confirm that your {{ VirtProductName }} installation is healthy before you put production workloads on it. {._abstract}

A self validation checkup runs conformance tests on critical subsystems. It checks whether the whole installation works, not just one part at a time.

Run the checkup after you install {{ VirtProductName }} and before you add production workloads. Problems are easier to fix before production workloads depend on the cluster.