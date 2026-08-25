{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing the status of {{ logging }} components {id="cluster-logging-clo-status-comp_{{ context }}"}

You can view the status for a number of {{ logging }} components.

**Prerequisites**

*   The {{ clo }} and {{ es_op }} are installed.

**Procedure**

1.  Change to the `openshift-logging` project.
    ```terminal
    $ oc project openshift-logging
    ```
1.  View the status of {{ logging }} environment:
    ```terminal
    $ oc describe deployment cluster-logging-operator
    ```
    ```terminal title="Example output"
    Name:                   cluster-logging-operator

    ....

    Conditions:
      Type           Status  Reason
      ----           ------  ------
      Available      True    MinimumReplicasAvailable
      Progressing    True    NewReplicaSetAvailable

    ....

    Events:
      Type    Reason             Age   From                   Message
      ----    ------             ----  ----                   -------
      Normal  ScalingReplicaSet  62m   deployment-controller  Scaled up replica set cluster-logging-operator-574b8987df to 1----
    ```
1.  View the status of the {{ logging }} replica set:
    1.  Get the name of a replica set:
        ```terminal title="Example output"
        $ oc get replicaset
        ```
        ```terminal title="Example output"
        NAME                                      DESIRED   CURRENT   READY   AGE
        cluster-logging-operator-574b8987df       1         1         1       159m
        elasticsearch-cdm-uhr537yu-1-6869694fb    1         1         1       157m
        elasticsearch-cdm-uhr537yu-2-857b6d676f   1         1         1       156m
        elasticsearch-cdm-uhr537yu-3-5b6fdd8cfd   1         1         1       155m
        kibana-5bd5544f87                         1         1         1       157m
        ```
    1.  Get the status of the replica set:
        ```terminal
        $ oc describe replicaset cluster-logging-operator-574b8987df
        ```
        ```terminal title="Example output"
        Name:           cluster-logging-operator-574b8987df

        ....

        Replicas:       1 current / 1 desired
        Pods Status:    1 Running / 0 Waiting / 0 Succeeded / 0 Failed

        ....

        Events:
          Type    Reason            Age   From                   Message
          ----    ------            ----  ----                   -------
          Normal  SuccessfulCreate  66m   replicaset-controller  Created pod: cluster-logging-operator-574b8987df-qjhqv----
        ```