{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a Kueue custom resource {id="create-kueue-cr_{{ context }}"}

After you have installed the {{ kueue_op }}, you must create a `Kueue` custom resource (CR) to configure your installation. {._abstract}

**Prerequisites**

{% include "./snippets/prereqs-snippet-console.md" %}

**Procedure**

1.  In the {{ product_title }} web console, click **Operators** -> **Installed Operators**.
1.  In the **Provided APIs** table column, click **Kueue**. This takes you to the **Kueue** tab of the **Operator details** page.
1.  Click **Create Kueue**. This takes you to the **Create Kueue** YAML view.
1.  Enter the details for your `Kueue` CR.
    ```yaml title="Example Kueue CR"
    apiVersion: kueue.openshift.io/v1
    kind: Kueue
    metadata:
      labels:
        app.kubernetes.io/name: kueue-operator
        app.kubernetes.io/managed-by: kustomize
      name: cluster
      namespace: openshift-kueue-operator
    spec:
      managementState: Managed
      config:
        integrations:
          frameworks:
          - BatchJob
        preemption:
          preemptionPolicy: Classical
    # ...
    ```

    where:

    `metadata.name`
    :   Specifies the name of the `Kueue` CR. The value must be `cluster`.

    `spec.config.integrations.frameworks`
    :   Specifies the workload types to configure for {{ kueue_name }}. The default configuration is `BatchJob`. Additional types are `Pod`, `Deployment`, and `StatefulSet`.

    `spec.config.preemption.preemptionPolicy`
    :   Specifies the preemption policy for {{ kueue_name }}. Set the value to `FairSharing` to configure fair sharing. The default value is `Classical`. This value is optional.

1.  Click **Create**.

**Verification**

*   After you create the `Kueue` CR, the web console brings you to the **Operator details** page, where you can see the CR in the list of **Kueues**.
*   Optional: If you have the {{ oc_first }} installed, you can run the following command and observe the output to confirm that your `Kueue` CR has been created successfully:
    ```terminal
    $ oc get kueue
    ```
    ```terminal title="Example output"
    NAME      	AGE
    cluster   	4m
    ```