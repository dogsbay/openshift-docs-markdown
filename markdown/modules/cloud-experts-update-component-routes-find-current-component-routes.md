{%- set _mod_docs_content_type = "PROCEDURE" %}
# Find the current routes {id="cloud-experts-update-component-routes-find-current-component-routes_{{ context }}"}

You need to use the {{ oc_first }} tool to find the base hostname of your cluster routes. {._abstract}

**Procedure**

1.  Verify that you can reach the component routes on their default hostnames.

    You can find the hostnames by querying the lists of routes in the `openshift-console` and `openshift-authentication` projects.
    ```bash
    $ oc get routes -n openshift-console
    $ oc get routes -n openshift-authentication
    ```
    ```text title="Example output"
    NAME        HOST/PORT                                                                          PATH       SERVICES    PORT    TERMINATION          WILDCARD
    console     console-openshift-console.apps.my-example-cluster-aws.z9a9.p1.openshiftapps.com    ... 1 more  console    https   reencrypt/Redirect   None
    downloads   downloads-openshift-console.apps.my-example-cluster-aws.z9a9.p1.openshiftapps.com  ... 1 more  downloads  http    edge/Redirect        None
    NAME              HOST/PORT                                                             PATH        SERVICES          PORT   TERMINATION            WILDCARD
    oauth-openshift   oauth-openshift.apps.my-example-cluster-aws.z9a9.p1.openshiftapps.com ... 1 more  oauth-openshift   6443   passthrough/Redirect   None
    ```

    From this output you can see that our base hostname is `z9a9.p1.openshiftapps.com`.
1.  Get the ID of the default ingress by running the following command:
    ```bash
    $ export INGRESS_ID=$(rosa list ingress -c ${CLUSTER_NAME} -o json | jq -r '.[] | select(.default == true) | .id')
    ```
1.  Ensure all fields output correctly before moving to the next section:
    ```terminal
    $ echo "Ingress ID: ${INGRESS_ID}"
    ```
    ```text title="Example output"
    Ingress ID: r3l6
    ```

    By running these commands you can see that the default component routes for our cluster are:
    *   `console-openshift-console.apps.my-example-cluster-aws.z9a9.p1.openshiftapps.com` for Console
    *   `downloads-openshift-console.apps.my-example-cluster-aws.z9a9.p1.openshiftapps.com` for Downloads
    *   `oauth-openshift.apps.my-example-cluster-aws.z9a9.p1.openshiftapps.com` for OAuth

        We can use the `rosa edit ingress` command to change the hostname of each service and add a TLS certificate for all of our component routes. The relevant parameters are shown in this excerpt of the command-line help for the `rosa edit ingress` command:
        ```bash
        $ rosa edit ingress -h
        Edit a cluster ingress for a cluster. Usage:
          rosa edit ingress ID [flags]
          [...]
          --component-routes string                Component routes settings. Available keys [oauth, console, downloads]. For each key a pair of hostname and tlsSecretRef is expected to be supplied. Format should be a comma separate list 'oauth: hostname=example-hostname;tlsSecretRef=example-secret-ref,downloads:...'
        ```

        For this example, we’ll use the following custom component routes:
    *   `console.my-new-domain.dev` for Console
    *   `downloads.my-new-domain.dev` for Downloads
    *   `oauth.my-new-domain.dev` for OAuth