{%- set _mod_docs_content_type = "CONCEPT" %}
# Improve scheduling behavior by enabling the real-time kernel on my nodes {id="improve-scheduling-behavior-by-enabling-the-real-time-kernel-on-my-nodes-con_{{ context }}"}

You can switch the nodes in a pool to the real-time kernel by creating a machine config that enables the `kernel-rt` package. The real-time kernel gives latency-sensitive workloads more deterministic scheduling behavior.