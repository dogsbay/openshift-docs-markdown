{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure fair sharing between cluster queues {id="kueue-fair-sharing-intro_{{ context }}"}

You can configure fair sharing as a preemption strategy to distribute borrowable resources equally or by weight between the tenants of a cohort. You enable fair sharing by setting the `preemptionPolicy` value in the `Kueue` custom resource (CR) to `FairSharing`.