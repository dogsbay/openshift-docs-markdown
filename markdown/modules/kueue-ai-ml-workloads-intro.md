{%- set _mod_docs_content_type = "CONCEPT" %}
# Run AI and ML workloads with {{ kueue_name }} {id="kueue-ai-ml-workloads-intro_{{ context }}"}

You can run batch artificial intelligence (AI) and machine learning (ML) workloads on a shared {{ product_title }} cluster by using {{ kueue_name }}, a job queuing system that decides when workloads start, wait, or are preempted. {{ kueue_name }} admits jobs against the quotas that you configure, so that expensive accelerator capacity stays fully used and important jobs are not delayed by less critical ones.