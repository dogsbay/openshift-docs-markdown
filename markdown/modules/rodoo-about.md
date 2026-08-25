{%- set _mod_docs_content_type = "CONCEPT" %}
# About the {{ run_once_operator }} {id="rodoo-about_{{ context }}"}

The {{ run_once_operator }} enforces time limits on run-once pods to prevent tasks such as builds and deployments from running indefinitely. {._abstract}

{{ product_title }} relies on run-once pods to perform tasks such as deploying a pod or performing a build. Run-once pods are pods that have a `RestartPolicy` of `Never` or `OnFailure`.

Cluster administrators can use the {{ run_once_operator }} to force a limit on the time that those run-once pods can be active. After the time limit expires, the cluster tries to actively terminate those pods.

To apply the run-once duration override from the {{ run_once_operator }} to run-once pods, you must enable it on each applicable namespace.

If both the run-once pod and the {{ run_once_operator }} have their `activeDeadlineSeconds` value set, the lower of the two values is used.


:::note

You cannot install the {{ run_once_operator }} on clusters managed by the HyperShift Operator.

:::