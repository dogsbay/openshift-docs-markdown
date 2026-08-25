# Generating manifests from a deployed adapter {id="ossm-threescale-manifests_{{ context }}"}


:::note

*   `NAME` is an identifier you use to identify with the service you are managing with 3scale.
*   The `CREDENTIALS_NAME` reference is an identifier that corresponds to the `match` section in the rule configuration. This is automatically set to the `NAME` identifier if you are using the CLI tool.
*   Its value does not need to be anything specific: the label value should just match the contents of the rule. See [Routing service traffic through the adapter](https://github.com/3scale/3scale-istio-adapter/blob/v2.X/README.md#routing-service-traffic-through-the-adapter) for more information.

:::


1.  Run this command to generate manifests from a deployed adapter in the `istio-system` namespace:
    ```
    $ export NS="istio-system" URL="https://replaceme-admin.3scale.net:443" NAME="name" TOKEN="token"
    oc exec -n ${NS} $(oc get po -n ${NS} -o jsonpath='{.items[?(@.metadata.labels.app=="3scale-istio-adapter")].metadata.name}') \
    -it -- ./3scale-config-gen \
    --url ${URL} --name ${NAME} --token ${TOKEN} -n ${NS}
    ```
1.  This will produce sample output to the terminal. Edit these samples if required and create the objects using the `oc create` command.
1.  When the request reaches the adapter, the adapter needs to know how the service maps to an API on 3scale. You can provide this information in two ways:
    1.  Label the workload (recommended)
    1.  Hard code the handler as `service_id`
1.  Update the workload with the required annotations:

    :::note

    You only need to update the service ID provided in this example if it is not already embedded in the handler. **The setting in the handler takes precedence**.
    
    :::

    ```
    $ export CREDENTIALS_NAME="replace-me"
    export SERVICE_ID="replace-me"
    export DEPLOYMENT="replace-me"
    patch="$(oc get deployment "${DEPLOYMENT}"
    patch="$(oc get deployment "${DEPLOYMENT}" --template='{"spec":{"template":{"metadata":{"labels":{ {{ range $k,$v := .spec.template.metadata.labels }}"{{ $k }}":"{{ $v }}",{{ end }}"service-mesh.3scale.net/service-id":"'"${SERVICE_ID}"'","service-mesh.3scale.net/credentials":"'"${CREDENTIALS_NAME}"'"}}}}}' )"
    oc patch deployment "${DEPLOYMENT}" --patch ''"${patch}"''

    ```