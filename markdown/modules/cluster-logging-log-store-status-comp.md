# Viewing the status of the log store components {id="cluster-logging-elasticsearch-status-comp_{{ context }}"}

You can view the status for a number of the log store components.


Elasticsearch indices
:   You can view the status of the Elasticsearch indices.

1.  Get the name of an Elasticsearch pod:
    ```terminal
    $ oc get pods --selector component=elasticsearch -o name
    ```
    ```terminal title="Example output"
    pod/elasticsearch-cdm-1godmszn-1-6f8495-vp4lw
    pod/elasticsearch-cdm-1godmszn-2-5769cf-9ms2n
    pod/elasticsearch-cdm-1godmszn-3-f66f7d-zqkz7
    ```
1.  Get the status of the indices:
    ```terminal
    $ oc exec elasticsearch-cdm-4vjor49p-2-6d4d7db474-q2w7z -- indices
    ```
    ```terminal title="Example output"
    Defaulting container name to elasticsearch.
    Use 'oc describe pod/elasticsearch-cdm-4vjor49p-2-6d4d7db474-q2w7z -n openshift-logging' to see all of the containers in this pod.

    green  open   infra-000002                                                     S4QANnf1QP6NgCegfnrnbQ   3   1     119926            0        157             78
    green  open   audit-000001                                                     8_EQx77iQCSTzFOXtxRqFw   3   1          0            0          0              0
    green  open   .security                                                        iDjscH7aSUGhIdq0LheLBQ   1   1          5            0          0              0
    green  open   .kibana_-377444158_kubeadmin                                     yBywZ9GfSrKebz5gWBZbjw   3   1          1            0          0              0
    green  open   infra-000001                                                     z6Dpe__ORgiopEpW6Yl44A   3   1     871000            0        874            436
    green  open   app-000001                                                       hIrazQCeSISewG3c2VIvsQ   3   1       2453            0          3              1
    green  open   .kibana_1                                                        JCitcBMSQxKOvIq6iQW6wg   1   1          0            0          0              0
    green  open   .kibana_-1595131456_user1                                        gIYFIEGRRe-ka0W3okS-mQ   3   1          1            0          0              0
    ```

    Log store pods
    :   You can view the status of the pods that host the log store.

1.  Get the name of a pod:
    ```terminal
    $ oc get pods --selector component=elasticsearch -o name
    ```
    ```terminal title="Example output"
    pod/elasticsearch-cdm-1godmszn-1-6f8495-vp4lw
    pod/elasticsearch-cdm-1godmszn-2-5769cf-9ms2n
    pod/elasticsearch-cdm-1godmszn-3-f66f7d-zqkz7
    ```
1.  Get the status of a pod:
    ```terminal
    $ oc describe pod elasticsearch-cdm-1godmszn-1-6f8495-vp4lw
    ```

    The output includes the following status information:
    ```terminal title="Example output"
    ....
    Status:             Running

    ....

    Containers:
      elasticsearch:
        Container ID:   cri-o://b7d44e0a9ea486e27f47763f5bb4c39dfd2
        State:          Running
          Started:      Mon, 08 Jun 2020 10:17:56 -0400
        Ready:          True
        Restart Count:  0
        Readiness:  exec [/usr/share/elasticsearch/probe/readiness.sh] delay=10s timeout=30s period=5s #success=1 #failure=3

    ....

      proxy:
        Container ID:  cri-o://3f77032abaddbb1652c116278652908dc01860320b8a4e741d06894b2f8f9aa1
        State:          Running
          Started:      Mon, 08 Jun 2020 10:18:38 -0400
        Ready:          True
        Restart Count:  0

    ....

    Conditions:
      Type              Status
      Initialized       True
      Ready             True
      ContainersReady   True
      PodScheduled      True

    ....

    Events:          <none>
    ```

    Log storage pod deployment configuration
    :   You can view the status of the log store deployment configuration.

1.  Get the name of a deployment configuration:
    ```terminal
    $ oc get deployment --selector component=elasticsearch -o name
    ```
    ```terminal title="Example output"
    deployment.extensions/elasticsearch-cdm-1gon-1
    deployment.extensions/elasticsearch-cdm-1gon-2
    deployment.extensions/elasticsearch-cdm-1gon-3
    ```
1.  Get the deployment configuration status:
    ```terminal
    $ oc describe deployment elasticsearch-cdm-1gon-1
    ```

    The output includes the following status information:
    ```terminal title="Example output"
    ....
      Containers:
       elasticsearch:
        Image:      registry.redhat.io/openshift-logging/elasticsearch6-rhel8
        Readiness:  exec [/usr/share/elasticsearch/probe/readiness.sh] delay=10s timeout=30s period=5s #success=1 #failure=3

    ....

    Conditions:
      Type           Status   Reason
      ----           ------   ------
      Progressing    Unknown  DeploymentPaused
      Available      True     MinimumReplicasAvailable

    ....

    Events:          <none>
    ```

    Log store replica set
    :   You can view the status of the log store replica set.

1.  Get the name of a replica set:
    ```terminal
    $ oc get replicaSet --selector component=elasticsearch -o name

    replicaset.extensions/elasticsearch-cdm-1gon-1-6f8495
    replicaset.extensions/elasticsearch-cdm-1gon-2-5769cf
    replicaset.extensions/elasticsearch-cdm-1gon-3-f66f7d
    ```
1.  Get the status of the replica set:
    ```terminal
    $ oc describe replicaSet elasticsearch-cdm-1gon-1-6f8495
    ```

    The output includes the following status information:
    ```terminal title="Example output"
    ....
      Containers:
       elasticsearch:
        Image:      registry.redhat.io/openshift-logging/elasticsearch6-rhel8@sha256:4265742c7cdd85359140e2d7d703e4311b6497eec7676957f455d6908e7b1c25
        Readiness:  exec [/usr/share/elasticsearch/probe/readiness.sh] delay=10s timeout=30s period=5s #success=1 #failure=3

    ....

    Events:          <none>
    ```