{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ kueue_name }} personas {id="kueue-personas_{{ context }}"}

Different personas exist in a {{ kueue_name }} workflow. Identifying which persona matches your role tells you which quota configuration and job submission tasks apply to you. {._abstract}


Batch administrators
:   Batch administrators manage the cluster infrastructure and establish quotas and queues.

Batch users
:   Batch users run jobs on the cluster. Examples of batch users might be researchers, AI/ML engineers, or data scientists.

Serving users
:   Serving users run jobs on the cluster. For example, to expose a trained AI/ML model for inference.

Platform developers
:   Platform developers integrate {{ kueue_name }} with other software. They might also contribute to the Kueue open source project.