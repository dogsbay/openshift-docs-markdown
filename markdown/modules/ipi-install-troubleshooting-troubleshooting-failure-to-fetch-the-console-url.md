{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting a failure to fetch the console URL {id="troubleshooting-failure-to-fetch-the-console-url_{{ context }}"}

The installation program retrieves the URL for the {{ product_title }} console by using `[route][route-object]` within the `openshift-console` namespace.  {._abstract}

If the installation program fails the retrieve the URL for the console, use the following procedure.

**Procedure**

1.  Check if the console router is in the `Available` or `Failing` state by running the following command:
    ```terminal
    $ oc --kubeconfig=${INSTALL_DIR}/auth/kubeconfig get clusteroperator console -oyaml
    ```
    ```yaml title="Example output"
    apiVersion: config.openshift.io/v1
    kind: ClusterOperator
    metadata:
      creationTimestamp: 2019-02-27T22:46:57Z
      generation: 1
      name: console
      resourceVersion: "19682"
      selfLink: /apis/config.openshift.io/v1/clusteroperators/console
      uid: 960364aa-3ae1-11e9-bad4-0a97b6ba9358
    spec: {}
    status:
      conditions:
      - lastTransitionTime: 2019-02-27T22:46:58Z
        status: "False"
        type: Failing
      - lastTransitionTime: 2019-02-27T22:50:12Z
        status: "False"
        type: Progressing
      - lastTransitionTime: 2019-02-27T22:50:12Z
        status: "True"
        type: Available
      - lastTransitionTime: 2019-02-27T22:46:57Z
        status: "True"
        type: Upgradeable
      extension: null
      relatedObjects:
      - group: operator.openshift.io
        name: cluster
        resource: consoles
      - group: config.openshift.io
        name: cluster
        resource: consoles
      - group: oauth.openshift.io
        name: console
        resource: oauthclients
      - group: ""
        name: openshift-console-operator
        resource: namespaces
      - group: ""
        name: openshift-console
        resource: namespaces
      versions: null
    ```
1.  Manually retrieve the console URL by running the following command:
    ```terminal
    $ oc --kubeconfig=${INSTALL_DIR}/auth/kubeconfig get route console -n openshift-console \
         -o=jsonpath='{.spec.host}' console-openshift-console.apps.adahiya-1.devcluster.openshift.com
    ```