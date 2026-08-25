{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create GitOps applications on {{ microshift_short }} {id="microshift-gitops-adding-apps_{{ context }}"}

You can create a custom configuration by using a YAML file to deploy and manage applications in your {{ microshift_short }} service after you install the {{ gitops_title }} Argo CD manifests from an RPM package. {._abstract}

**Prerequisites**

*   You installed the `microshift-gitops` packages.
*   The Argo CD pods are running in the `openshift-gitops` namespace.

**Procedure**

1.  Create a YAML file and add your customized configurations for the application:
    ```yaml title="Example YAML for a spring-petclinic application"
    kind: AppProject
    apiVersion: argoproj.io/v1alpha1
    metadata:
      name: default
      namespace: openshift-gitops
    spec:
      clusterResourceWhitelist:
      - group: '*'
        kind: '*'
      destinations:
      - namespace: '*'
        server: '*'
      sourceRepos:
      - '*'
    ---
    kind: Application
    apiVersion: argoproj.io/v1alpha1
    metadata:
      name: spring-petclinic
      namespace: openshift-gitops
    spec:
      destination:
        namespace: spring-petclinic
        server: https://kubernetes.default.svc
      project: default
      source:
        directory:
          recurse: true
        path: app
        repoURL: https://github.com/siamaksade/openshift-gitops-getting-started
      syncPolicy:
        automated: {}
        syncOptions:
        - CreateNamespace=true
        - ServerSideApply=true
    ```
1.  To deploy the applications defined in the YAML file, run the following command:
    ```terminal
    $ oc apply -f _<my_app.yaml>_
    ```

    Replace `_<my_app.yaml>_` with the name of your application YAML.

**Verification**

*   To verify your application is deployed and synced, run the following command:
    ```terminal
    $ oc get applications -A
    ```

    Wait a few minutes for the application to show a `Healthy` status.
    ```terminal title="Example output"
    NAMESPACE          NAME               SYNC STATUS   HEALTH STATUS
    openshift-gitops   spring-petclinic   Synced        Healthy
    ```