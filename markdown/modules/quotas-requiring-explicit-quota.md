{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring explicit resource quotas {id="configuring-explicit-resource-quotas_{{ context }}"}

Configure explicit resource quotas in a project request template to apply specific resource quotas in new projects. {._abstract}

**Prerequisites**

*   Access to the cluster as a user with the cluster-admin role.
*   Install the OpenShift CLI (`oc`).

**Procedure**

1.  Add a resource quota definition to a project request template:
    *   If a project request template does not exist in a cluster:
        1.  Create a bootstrap project template and output it to a file called `template.yaml`:
            ```terminal
            $ oc adm create-bootstrap-project-template -o yaml > template.yaml
            ```
        1.  Add a resource quota definition to `template.yaml`. The following example defines a resource quota named 'storage-consumption'. The definition must be added before the `parameters:` section in the template:
            ```yaml
            - apiVersion: v1
              kind: ResourceQuota
              metadata:
                name: storage-consumption
                namespace: ${PROJECT_NAME}
              spec:
                hard:
                  persistentvolumeclaims: "10"
                  requests.storage: "50Gi"
                  gold.storageclass.storage.k8s.io/requests.storage: "10Gi"
                  silver.storageclass.storage.k8s.io/requests.storage: "20Gi"
                  silver.storageclass.storage.k8s.io/persistentvolumeclaims: "5"
                  bronze.storageclass.storage.k8s.io/requests.storage: "0"
                  bronze.storageclass.storage.k8s.io/persistentvolumeclaims: "0"
            ```

            where:

            `spec.hard.persistentvolumeclaims`
            :   The total number of persistent volume claims in a project.

            `spec.hard.requests.storage`
            :   Across all persistent volume claims in a project, the sum of storage requested cannot exceed this value.

            `spec.hard.gold.storageclass.storage.k8s.io/requests.storage`
            :   Across all persistent volume claims in a project, the sum of storage requested in the gold storage class cannot exceed this value.

            `spec.hard.silver.storageclass.storage.k8s.io/requests.storage`
            :   Across all persistent volume claims in a project, the sum of storage requested in the silver storage class cannot exceed this value.

            `spec.hard.silver.storageclass.storage.k8s.io/persistentvolumeclaims`
            :   Across all persistent volume claims in a project, the total number of claims in the silver storage class cannot exceed this value.

            `spec.hard.bronze.storageclass.storage.k8s.io/requests.storage`
            :   Across all persistent volume claims in a project, the sum of storage requested in the bronze storage class cannot exceed this value. When this value is set to `0`, the bronze storage class cannot request storage.

            `spec.hard.bronze.storageclass.storage.k8s.io/persistentvolumeclaims`
            :   Across all persistent volume claims in a project, the sum of storage requested in the bronze storage class cannot exceed this value. When this value is set to `0`, the bronze storage class cannot create claims.
        1.  Create a project request template from the modified `template.yaml` file in the `openshift-config` namespace:
            ```terminal
            $ oc create -f template.yaml -n openshift-config
            ```

            :::note

            To include the configuration as a `kubectl.kubernetes.io/last-applied-configuration` annotation, add the `--save-config` option to the `oc create` command.
            
            :::


            By default, the template is called `project-request`.
    *   If a project request template already exists within a cluster:

        :::note

        If you declaratively or imperatively manage objects within your cluster by using configuration files, edit the existing project request template through those files instead.
        
        :::

        1.  List templates in the `openshift-config` namespace:
            ```terminal
            $ oc get templates -n openshift-config
            ```
        1.  Edit an existing project request template:
            ```terminal
            $ oc edit template <project_request_template> -n openshift-config
            ```
        1.  Add a resource quota definition, such as the preceding `storage-consumption` example, into the existing template. The definition must be added before the `parameters:` section in the template.
1.  If you created a project request template, reference it in the cluster’s project configuration resource:
    1.  Access the project configuration resource for editing:
        *   By using the web console:
            1.  Navigate to the **Administration** -> **Cluster Settings** page.
            1.  Click **Configuration** to view all configuration resources.
            1.  Find the entry for **Project** and click **Edit YAML**.
        *   By using the CLI:
            1.  Edit the `project.config.openshift.io/cluster` resource:
                ```terminal
                $ oc edit project.config.openshift.io/cluster
                ```
    1.  Update the `spec` section of the project configuration resource to include the `projectRequestTemplate` and `name` parameters. The following example references the default project request template name `project-request`:
        ```yaml
        apiVersion: config.openshift.io/v1
        kind: Project
        metadata:
        #  ...
        spec:
          projectRequestTemplate:
            name: project-request
        ```
1.  Verify that the resource quota is applied when projects are created:
    1.  Create a project:
        ```terminal
        $ oc new-project <project_name>
        ```
    1.  List the project’s resource quotas:
        ```terminal
        $ oc get resourcequotas
        ```
    1.  Describe the resource quota in detail:
        ```terminal
        $ oc describe resourcequotas <resource_quota_name>
        ```