{%- set _mod_docs_content_type = "PROCEDURE" %}
# Testing the AMD GPU Operator {id="amd-testing-the-amd-gpu-operator_{{ context }}"}

Use the following procedure to test the ROCmInfo installation and view the logs for the AMD MI210 GPU. 

**Procedure**

1.  Create a YAML file that tests ROCmInfo:
    ```terminal
    $ cat << EOF > rocminfo.yaml

    apiVersion: v1
    kind: Pod
    metadata:
     name: rocminfo
    spec:
     containers:
     - image: docker.io/rocm/pytorch:latest
       name: rocminfo
       command: ["/bin/sh","-c"]
       args: ["rocminfo"]
       resources:
        limits:
          amd.com/gpu: 1
        requests:
          amd.com/gpu: 1
     restartPolicy: Never
    EOF
    ```
1.  Create the `rocminfo` pod:
    ```terminal
    $ oc create -f rocminfo.yaml
    ```
    ```terminal title="Example output"
    apiVersion: v1
    pod/rocminfo created
    ```
1.  Check the `rocmnfo` log with one MI210 GPU:
    ```terminal
    $ oc logs rocminfo | grep -A5 "Agent"
    ```
    ```terminal title="Example output"
    HSA Agents               
    ==========               
    *******                  
    Agent 1                  
    *******                  
      Name:                    Intel(R) Xeon(R) Gold 6330 CPU @ 2.00GHz
      Uuid:                    CPU-XX                             
      Marketing Name:          Intel(R) Xeon(R) Gold 6330 CPU @ 2.00GHz
      Vendor Name:             CPU                                
    --
    Agent 2                  
    *******                  
      Name:                    Intel(R) Xeon(R) Gold 6330 CPU @ 2.00GHz
      Uuid:                    CPU-XX                             
      Marketing Name:          Intel(R) Xeon(R) Gold 6330 CPU @ 2.00GHz
      Vendor Name:             CPU                                
    --
    Agent 3                  
    *******                  
      Name:                    gfx90a                             
      Uuid:                    GPU-024b776f768a638b               
      Marketing Name:          AMD Instinct MI210                 
      Vendor Name:             AMD             
    ```
1.  Delete the pod: 
    ```terminal
    $ oc delete -f rocminfo.yaml
    ```
    ```terminal title="Example output"
    pod "rocminfo" deleted
    ```