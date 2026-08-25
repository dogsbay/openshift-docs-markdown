{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding how to update secrets {id="nodes-pods-secrets-updating_{{ context }}"}

To update the values in a secret, you must re-create the pods that use that secret. Because running pods do not automatically detect changes to secret data, restarting the pods ensures they consume the updated configuration. {._abstract}

Updating a secret follows the same workflow as deploying a new container image. You can use the `kubectl rolling-update` command.

The `resourceVersion` value in a secret is not specified when it is referenced. Therefore, if a secret is updated at the same time as pods are starting, the version of the secret that is used for the pod is not defined.


:::note

Currently, it is not possible to check the resource version of a secret object that was used when a pod was created. It is planned that pods will report this information, so that a controller could restart ones using an old `resourceVersion`. In the interim, do not update the data of existing secrets, but create new ones with distinct names.

:::