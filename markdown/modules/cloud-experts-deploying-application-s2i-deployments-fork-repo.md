{%- set _mod_docs_content_type = "PROCEDURE" %}
# Fork the OSToy repository {id="cloud-experts-deploying-application-s2i-deployments-fork-repo_{{ context }}"}

The next section focuses on triggering automated builds based on changes to the source code. You must set up a GitHub webhook to trigger S2I builds when you push code into your GitHub repo.  {._abstract}

**Procedure**

*   To set up the webhook, you must [first fork the repo](https://github.com/openshift-cs/ostoy/fork).

    :::note

    Replace `<UserName>` with your own GitHub username for the following URLs in this guide.
    
    :::