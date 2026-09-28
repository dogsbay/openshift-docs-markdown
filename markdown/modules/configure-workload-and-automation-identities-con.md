{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure workload and automation identities {id="configure-workload-and-automation-identities-con_{{ context }}"}

Service accounts let automation, Operators, and workloads call the API without sharing regular user credentials. By giving each component its own identity, and by using bound tokens or external workload identity, you can scope and audit machine access independently of the people who administer the cluster.