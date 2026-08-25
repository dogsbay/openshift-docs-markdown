{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating sidecar proxies {id="ossm-update-app-sidecar_{{ context }}"}

In order to update the configuration for sidecar proxies the application administrator must restart the application pods.

If your deployment uses automatic sidecar injection, you can update the pod template in the deployment by adding or modifying an annotation. Run the following command to redeploy the pods:

```terminal
$ oc patch deployment/<deployment> -p '{"spec":{"template":{"metadata":{"annotations":{"kubectl.kubernetes.io/restartedAt": "'`date -Iseconds`'"}}}}}'
```

If your deployment does not use automatic sidecar injection, you must manually update the sidecars by modifying the sidecar container image specified in the deployment or pod, and then restart the pods.