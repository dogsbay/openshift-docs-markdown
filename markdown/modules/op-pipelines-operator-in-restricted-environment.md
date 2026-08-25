# {pipelines-title} Operator in a restricted environment {id="op-pipelines-operator-in-restricted-environment_{{ context }}"}

The {{ pipelines_title }} Operator enables support for installation of pipelines in a restricted network environment.

The Operator installs a proxy webhook that sets the proxy environment variables in the containers of the pod created by tekton-controllers based on the `cluster` proxy object. It also sets the proxy environment variables in the `TektonPipelines`, `TektonTriggers`, `Controllers`, `Webhooks`, and `Operator Proxy Webhook` resources.

By default, the proxy webhook is disabled for the `openshift-pipelines` namespace. To disable it for any other namespace, you can add the `operator.tekton.dev/disable-proxy: true` label to the `namespace` object.