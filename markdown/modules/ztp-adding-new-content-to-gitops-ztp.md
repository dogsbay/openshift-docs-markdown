{%- set _mod_docs_content_type = "PROCEDURE" %}

# Adding custom content to the {{ ztp }} pipeline {id="ztp-adding-new-content-to-gitops-ztp_{{ context }}"}

Perform the following procedure to add new content to the {{ ztp }} pipeline. {._abstract}

**Procedure**

1.  Create a subdirectory named `source-crs` in the directory that contains the `kustomization.yaml` file for the `{{ policy_gen_cr }}` custom resource (CR).
1.  Add your user-provided CRs to the `source-crs` subdirectory, as shown in the following example:
{%- if policy-gen-cr == "PolicyGenTemplate" %}
{% include "./snippets/pgt-ztp-adding-new-content-to-gitops-ztp-folder-structure.md" %}
{% endif %}
{% if policy-gen-cr == "PolicyGenerator" %}
{% include "./snippets/pg-ztp-adding-new-content-to-gitops-ztp-folder-structure.md" %}
{%- endif %}
1.  Update the required `{{ policy_gen_cr }}` CRs to include references to the content you added in the `source-crs/custom-crs` and `source-crs/elasticsearch` directories. For example:
{%- if policy-gen-cr == "PolicyGenTemplate" %}
{% include "./snippets/pgt-ztp-adding-new-content-to-gitops-ztp.md" %}
{% endif %}
{% if policy-gen-cr == "PolicyGenerator" %}
{% include "./snippets/pg-ztp-adding-new-content-to-gitops-ztp.md" %}
{%- endif %}
1.  Commit the `{{ policy_gen_cr }}` change in Git, and then push to the Git repository that is monitored by the GitOps ZTP Argo CD policies application.
1.  Update the `ClusterGroupUpgrade` CR to include the changed `{{ policy_gen_cr }}` and save it as `cgu-test.yaml`. The following example shows a generated `cgu-test.yaml` file.
    ```yaml
    apiVersion: ran.openshift.io/v1alpha1
    kind: ClusterGroupUpgrade
    metadata:
      name: custom-source-cr
      namespace: ztp-clusters
    spec:
      managedPolicies:
        - group-dev-config-policy
      enable: true
      clusters:
      - cluster1
      remediationStrategy:
        maxConcurrency: 2
        timeout: 240
    ```
1.  Apply the updated `ClusterGroupUpgrade` CR by running the following command:
    ```terminal
    $ oc apply -f cgu-test.yaml
    ```

**Verification**

*   Check that the updates have succeeded by running the following command:
    ```terminal
    $ oc get cgu -A
    ```

    The following example shows the output:
    ```terminal
    NAMESPACE     NAME               AGE   STATE        DETAILS
    ztp-clusters  custom-source-cr   6s    InProgress   Remediating non-compliant policies
    ztp-install   cluster1           19h   Completed    All clusters are compliant with all the managed policies
    ```