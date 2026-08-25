{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding a project to the mesh using label selectors with the CLI {id="ossm-adding-project-using-label-selectors-cli_{{ context }}"}

You can use label selectors to add a project to the {{ SMProductShortName }} with the CLI.

**Prerequisites**

*   You have installed the {{ SMProductName }} Operator.
*   The deployment has an existing `ServiceMeshMemberRoll` resource.
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You are logged in to {{ product_title }} as`cluster-admin`.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   You are logged in to {{ product_title }} as a user with the `dedicated-admin` role.
{% endif %}

**Procedure**

1.  Log in to the {{ product_title }} CLI.
1.  Edit the `ServiceMeshMemberRoll` resource.
    ```terminal
    $ oc edit smmr default -n istio-system
    ```

    You can deploy the {{ SMProductShortName }} control plane to any project provided that it is separate from the project that contains your services.
1.  Modify the YAML file to include namespace label selectors in the `spec.memberSelectors` field of the `ServiceMeshMemberRoll` resource.

    :::note

    Instead of using the `matchLabels` field, you can also use the `matchExpressions` field in the selector.
    
    :::

    ```yaml
    apiVersion: maistra.io/v1
    kind: ServiceMeshMemberRoll
    metadata:
      name: default
      namespace: istio-system
    spec:
      memberSelectors: (1)
      - matchLabels: (2)
          mykey: myvalue (2)
      - matchLabels: (3)
          myotherkey: myothervalue (3)
    ```
    1.  Contains the label selectors used to identify which project namespaces are included in the service mesh. If a project namespace has either label specified by the selectors, then the project namespace is included in the service mesh. The project namespace does not need both labels to be included.
    1.  Specifies all namespaces with the `mykey=myvalue` label. When the selector identifies a match, the project namespace is added to the service mesh.
    1.  Specifies all namespaces with the `myotherkey=myothervalue` label. When the selector identifies a match, the project namespace is added to the service mesh.