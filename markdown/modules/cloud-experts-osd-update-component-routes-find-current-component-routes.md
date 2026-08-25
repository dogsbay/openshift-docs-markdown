{%- set _mod_docs_content_type = "PROCEDURE" %}
# Finding the current component routes {id="cloud-experts-osd-update-component-routes-find-current-component-routes_{{ context }}"}

Find the base hostname of your cluster routes to verify the default component route configuration. {._abstract}

**Procedure**

1.  Verify that you can reach the component routes on their default hostnames. You can find the hostnames by querying the lists of routes in the `openshift-console` and `openshift-authentication` projects.
    ```bash
    $ oc get routes -n openshift-console
    $ oc get routes -n openshift-authentication
    ```
    ```text title="Example output"
    NAME        HOST/PORT                                                                          PATH       SERVICES    PORT    TERMINATION          WILDCARD
    console     console-openshift-console.apps.my-example-cluster-gcp.<cluster_id>.openshiftapps.com    ... 1 more  console    https   reencrypt/Redirect   None
    downloads   downloads-openshift-console.apps.my-example-cluster-gcp.<cluster_id>.openshiftapps.com  ... 1 more  downloads  http    edge/Redirect        None
    NAME              HOST/PORT                                                             PATH        SERVICES          PORT   TERMINATION            WILDCARD
    oauth-openshift   oauth-openshift.apps.my-example-cluster-gcp.<cluster_id>.openshiftapps.com ... 1 more  oauth-openshift   6443   passthrough/Redirect   None
    ```

    By running these commands you can see that the default component routes for your cluster are:
    *   `console-openshift-console.apps.my-example-cluster-gcp.<cluster_id>.openshiftapps.com` for Console
    *   `downloads-openshift-console.apps.my-example-cluster-gcp.<cluster_id>.openshiftapps.com` for Downloads
    *   `oauth-openshift.apps.my-example-cluster-gcp.<cluster_id>.openshiftapps.com` for OAuth

        From this output you can see that your base hostname is `<cluster_id>.openshiftapps.com`.
1.  Get the ID of the default ingress by running the following command:
    ```bash
    $ export INGRESS_ID=$(ocm list ingresses -c ${CLUSTER_NAME} | awk '$4 == "true" {print $1}')
    ```
1.  Ensure all fields output correctly before moving to the next section:
    ```terminal
    $ echo "Ingress ID: ${INGRESS_ID}"
    ```
    ```text title="Example output"
    Ingress ID: r3l6
    ```
1.  Use the `ocm edit ingress` command to change the hostname of each service and add a TLS certificate for all of your component routes. This excerpt of the command-line help for the `ocm edit ingress` command shows the relevant parameters:
    ```bash
    $ ocm edit ingress -h
    Edit a cluster ingress for a cluster. Usage:
      ocm edit ingress ID [flags]
      [...]
      --component-routes string                Component routes settings. Available keys [oauth, console, downloads]. For each key a pair of hostname and tlsSecretRef is expected to be supplied. Format should be a comma separate list 'oauth: hostname=example-hostname;tlsSecretRef=example-secret-ref,downloads:...'
    ```