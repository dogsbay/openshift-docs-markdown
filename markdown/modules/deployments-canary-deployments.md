{%- set _mod_docs_content_type = "CONCEPT" %}
# Canary deployments {id="deployments-canary-deployments_{{ context }}"}

To validate a new application version before replacing all pods in {{ product_title }}, you can use a canary deployment. All rolling deployments are canary deployments: the new instance is tested with readiness checks and automatically rolled back if it never becomes ready. {._abstract}

The readiness check is part of the application code and can be as sophisticated as necessary to ensure the new instance is ready to be used. If you must implement more complex checks of the application (such as sending real user workloads to the new instance), consider implementing a custom deployment or using a blue-green deployment strategy.