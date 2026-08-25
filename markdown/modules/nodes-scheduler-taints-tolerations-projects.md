{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a project with a node selector and toleration {id="nodes-scheduler-taints-tolerations-projects_{{ context }}"}

You can create a project that uses a node selector and toleration, which are set as annotations, to control the placement of pods onto specific nodes. Any subsequent resources created in the project are then scheduled on nodes that have a taint matching the toleration. {._abstract}

**Prerequisites**

*   A label for node selection has been added to one or more nodes by using a compute machine set or editing the node directly.
*   A taint has been added to one or more nodes by using a compute machine set or editing the node directly.

**Procedure**

1.  Create a `Project` resource definition, specifying a node selector and toleration in the `metadata.annotations` section:
    ```yaml title="Example project.yaml file"
    kind: Project
    apiVersion: project.openshift.io/v1
    metadata:
      name: <project_name>
      annotations:
        openshift.io/node-selector: '<label>'
        scheduler.alpha.kubernetes.io/defaultTolerations: >-
          [{"operator": "Exists", "effect": "NoSchedule", "key":
          "<key_name>"}
          ]
    ```

    where:

    `metadata.name`
    :   Specifies the project name.

    `metadata.annotations.openshift.io/node-selector`
    :   Specifies the default node selector label.

    `metadata.annotations.scheduler.alpha.kubernetes.io/defaultTolerations`
    :   Specifies the toleration parameters, as described in the **Taint and toleration components** table. This example uses the `NoSchedule` effect, which allows existing pods on the node to remain, and the `Exists` operator, which does not take a value.

1.  Use the `oc apply` command to create the project:
    ```terminal
    $ oc apply -f project.yaml
    ```

    Any subsequent resources created in the `<project_name>` namespace should now be scheduled on the specified nodes.