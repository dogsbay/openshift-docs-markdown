{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding the OSToy UI {id="learning-lab-overview-ui_{{ context }}"}

You can explore the different components of the OSToy application by reviewing its architectural breakdown. Understanding this structure prepares you to successfully deploy and manage its microservices. {._abstract}

![Preview of the OSToy homepage](/images/ostoy-homepage.png)

1.  Pod name
1.  **Home:** Application home page
1.  **Persistent Storage:** Writes data to the persistent volume bound to the application
1.  **Config Maps:**  Shows ConfigMaps available to the application and the key:value pairs
1.  **Secrets:** Shows secrets available to the application and the key:value pairs
1.  **ENV Variables:** Shows environment variables available to the application
1.  **Networking:** Networking tools
1.  **Pod Auto Scaling:** Increase the load of the pods and test the Horizontal Pod Autoscaler (HPA)
1.  **ACK S3:** Integrate with AWS S3 to read and write objects to a bucket 
1.  **About:** Application information