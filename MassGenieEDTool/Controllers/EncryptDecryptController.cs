using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MassGenieEDTool.Controllers
{
    [Route("encrypt-decrypt")]
    public class EncryptDecryptController : Controller
    {
        [HttpPost]
        [Route("get-result")]
        public ActionResult Submit([FromBody]EDInput model)
        {
            string output = "";
            try
            {
                byte[] bytes = ASCIIEncoding.ASCII.GetBytes(model.Key).Take(8).ToArray();
                if (model.Mode == 1)
                {
                    output = EncryptUtils.Encrypt(bytes, model.Input);
                }

                if (model.Mode == 2)
                {
                    output = EncryptUtils.Decrypt(bytes, model.Input);
                }

                return new JsonResult(new
                {
                    data = output,
                    status = "success",
                    statusCode = 1,
                    message = ""
                });
            }
            catch (Exception ex)
            {
                return new JsonResult(new
                {
                    data = output,
                    status = "error",
                    statusCode = 0,
                    message = ex.Message
                });
            }
        }
    }
}