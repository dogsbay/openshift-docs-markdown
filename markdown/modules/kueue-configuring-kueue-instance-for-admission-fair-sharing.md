{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the {{ kueue_name }} instance for admission fair sharing {id="configuring-kueue-instance-for-admission-fair-sharing_{{ context }}"}

Configure {{ kueue_name }} admission fair sharing using either the `Default` or `Custom` configuration.  {._abstract}

**Procedure**

1.  Choose the `configuration` type you want to use: 
    *   `Default`: Uses predefined values.
    *   `Custom`: Uses values that you specify.
1.  Apply your chosen configuration:
    *   Use the following command to create a `Default` configuration:
        ```terminal
        $ oc patch kueue.kueue.openshift.io/cluster --type=merge -p \ '{"spec":{"config":{"admissionFairSharing":{"configuration":"Default","custom":null}}}}'
        ```
        ```yaml title="Example of Kueue instance output"
        config:
            admissionFairSharing:
              configuration: Default
        ```
    *   Use the following command to create a `Custom` configuration that applies values that you specify:
        ```terminal
        $ oc patch kueue.kueue.openshift.io/cluster --type=merge -p \ '{"spec":{"config":{"admissionFairSharing":{"configuration":"Custom","custom":{"usageHalfLifeTimeSeconds":10,"usageSamplingIntervalSeconds":10,"resourceWeights":[{"name":"cpu","weight":"2.0"}]}}}}}'
        ```
        ```terminal title="Example of Kueue instance output"
          config:
            admissionFairSharing:
              configuration: Custom
              custom:
                resourceWeights:
                - name: cpu
                  weight: "2.0"
                usageHalfLifeTimeSeconds: 10
                usageSamplingIntervalSeconds: 10
        ```

        `resourceWeights`
        :   Assigns weights to resources. The higher the weight, the higher the penalty.


`usageHalfLifeTimeSeconds`
:   The time in seconds after which the current usage will decrease by half. That is, it controls how long the past consumption should impact future admission. 


`usageSamplingIntervalSeconds`
:   The frequency in seconds that {{ kueue_name }} updates the `consumedResources` component in the `FairSharingStatus` component.