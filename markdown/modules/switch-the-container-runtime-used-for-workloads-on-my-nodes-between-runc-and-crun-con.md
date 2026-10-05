{%- set _mod_docs_content_type = "CONCEPT" %}
# Switch the container runtime between runC and crun {id="switch-the-container-runtime-used-for-workloads-on-my-nodes-between-runc-and-crun-con_{{ context }}"}

CRI-O can run containers with either runC or crun as the low-level OCI runtime. You select the runtime through a `ContainerRuntimeConfig` object that targets a machine config pool.